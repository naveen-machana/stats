import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Southampton');

matchReader.load();
const matches = matchReader.matches;

summary.buildAndPrintReport(matches);
