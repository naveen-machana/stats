import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './outputTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const reportString = this.analyzer.run(matches);
    this.output.print(reportString);
  }
}
