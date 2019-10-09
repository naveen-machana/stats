import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const teamName = 'Southampton';
const matches = matchReader.matches;
const summary = Summary.winsAnalysisWithHtmlReport(teamName);

summary.buildAndPrintReport(matches);
