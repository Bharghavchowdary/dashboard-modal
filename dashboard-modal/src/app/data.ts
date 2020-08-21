export class ColumnDefs {
  constructor(field: string, filter: string = "agTextColumnFilter") {
    this.field = field;
    this.filter = filter;
  }
  field: string;
  filter: string;
}

export class DataSet {
  constructor(data: any, label: string) {
    this.data = data;
    this.label = label;
  }
  data: any;
  label: string;
  lineTension: number = 0;
  borderWidth: number = 2;
  pointRadius: number = 2;
  pointBackgroundColor: string = 'white';
  cubicInterpolationMode: string = 'monotone';

}
