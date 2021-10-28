export class Notifiy {
  severity: String;
  summary: String;
  detail: String;

  constructor(severity: String, summary: String, detail: String) {
    this.severity = severity;
    this.summary = summary;
    this.detail = detail;
  }
}
