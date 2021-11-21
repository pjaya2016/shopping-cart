export class SearchFilter {
  key: string | undefined;
  operation: string | undefined;
  value: any;

  constructor(key: string, operation: string, value: any) {
    this.key = key;
    this.operation = operation;
    this.value = value;
  }
}
