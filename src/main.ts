import * as core from '@actions/core';
import { execute } from './execute';

async function run(): Promise<void> {

  try {

    const text = core.getInput('text');
    const regex = core.getInput('regex');
    const flags = core.getInput('flags');

    let results: string[] = [];
    
    execute(text, regex, flags, results);

    core.setOutput('match', results[0]);
    for (let i = 1; i < results.length; i++) {
      core.setOutput(`group${i}`, results[i]);
    }
  } catch (error: any) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
