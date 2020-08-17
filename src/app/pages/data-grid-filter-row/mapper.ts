export class Mapper {
  /**
   * Converts filter DQL string into array of filters
   */
  static filterQuery2FilterValue(filterQuery: string): any[] {
    if (filterQuery) {
      const formattedFilter = filterQuery
        .replace(/[^\(\)\s]+/gi, (value) => `"${value}"`)
        .replace(/\s/gi, ',')
        .replace(/\(/gi, '[')
        .replace(/\)/gi, ']');
      return JSON.parse(`[${formattedFilter}]`);
    }
    return [];
  }

  /**
   * Converts array of filters into filter DQL string
   */
  static filterValue2FilterQuery(filterValue: any[]): string {
    if (filterValue) {
      const parsedStringFilter = JSON.stringify(filterValue);
      return parsedStringFilter
        .replace(/\,/gi, ' ')
        .replace(/(^\[)|(\]$)|\"/gi, '')
        .replace(/\[/gi, '(')
        .replace(/\]/gi, ')');
    }
    return '';
  }
}
