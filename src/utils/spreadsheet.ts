import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet'

export type WhereClause = (
  value: GoogleSpreadsheetRow,
  index: number,
  array: GoogleSpreadsheetRow[]
) => unknown

class Spreadsheet {
  private _doc: GoogleSpreadsheet
  private _isLoaded: boolean = false

  constructor(googleSheetId?: string) {
    this._doc = new GoogleSpreadsheet(
      googleSheetId || (process.env.GOOGLE_SHEET_ID as string)
    )
  }

  private async load() {
    await this._doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
      private_key: process.env.GOOGLE_PRIVATE_KEY as string,
    })
    await this._doc.loadInfo()
    this._isLoaded = true
  }

  public async find(table: string, where: WhereClause) {
    const sheet = await this.getSheetByTitle(table)
    const rows = await sheet.getRows()
    return rows.filter(where)
  }

  public async findAll(table: string) {
    const sheet = await this.getSheetByTitle(table)
    return sheet.getRows()
  }

  public async create(table: string, data: any | any[]) {
    const sheet = await this.getSheetByTitle(table)
    if (Array.isArray(data)) {
      return sheet.addRows(data)
    }
    return sheet.addRow(data)
  }

  public async delete(table: string, where: WhereClause) {
    const sheet = await this.getSheetByTitle(table)
    const rows = await sheet.getRows()
    const deleteRows = rows.filter(where).map(row => row.delete())
    for (const deleteRow of deleteRows) {
      await deleteRow
    }
  }

  public async update(table: string, where: WhereClause, data: any) {
    const sheet = await this.getSheetByTitle(table)
    const rows = await sheet.getRows()
    const updateRows = rows.filter(where).map(row => {
      const newValues = Object.assign(row, data)
      return newValues.save()
    })
    for (const updateRow of updateRows) {
      await updateRow
    }
  }

  private async getSheetByTitle(title: string) {
    if (!this._isLoaded) await this.load()
    return this._doc.sheetsByTitle[title]
  }
}

export default new Spreadsheet()
