import { Stack, StackProps, Construct, SecretValue } from '@aws-cdk/core';
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines';
import { PolicyStatement, Effect } from '@aws-cdk/aws-iam'
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
export class MyPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();
    // const secretManagerAccessPolicy = new PolicyStatement({
    //     effect: Effect.ALLOW,
    //     actions: ["secretsmanager:GetSecretValue"],
    //     resources: ["*"]
    //   })    
    const pipeline = new CdkPipeline(this, 'Pipeline', {
      pipelineName: 'MyAppPipeline',
      cloudAssemblyArtifact,
      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: SecretValue.secretsManager('token_cdkpipelines_repo', {jsonField:'token_for_cdk-pipelines_repo'}),
        trigger: codepipeline_actions.GitHubTrigger.POLL,
        owner: 'dppuligu',
        repo: 'cdk-pipelines',
        branch: 'master'
      }),
      synthAction: SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,
        installCommand: 'npm install',
        buildCommand: 'npm run build',
        synthCommand: 'npm ci && npx cdk synth',
        // rolePolicyStatements: [secretManagerAccessPolicy]
      }),
    });
  }
}