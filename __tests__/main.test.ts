import { execute } from '../src/execute';

describe('Group matching', () => {
  it('Matching multiple results works', async () => {
    const text = '404-finder/main.py cloud-event/main.csx deploy/main.csx github/main.csx grafana/main.csx pager/main.csx sql/main.py todo/main.csx tweet/main.py tz/main.csx';
    const regex = "(?<!\S)([\-0-9a-zA-Z]*)\/main\.[py|csx|js]+(?!\S)";
    const flags = 'gm';
    
    let results: string[] = [];
    
    execute(text, regex, flags, results);
  
    console.log(results);
  
    expect(results[0]).toBe('404-finder/main.py cloud-event/main.csx deploy/main.csx github/main.csx grafana/main.csx pager/main.csx sql/main.py todo/main.csx tweet/main.py tz/main.csx');
    expect(results[1]).toBe('404-finder cloud-event deploy github grafana pager sql todo tweet tz');

  });
});
