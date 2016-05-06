import React, { Component, PropTypes } from 'react'

import style from './DataTableRow.css'
import NumericInput from 'components/NumericInput/NumericInput'

export default class DataTableRow extends Component {
  constructor(props) {
    super(props)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleInputBlur(value) {
    const { onRowEdit, regionCode } = this.props
    onRowEdit(regionCode, value)
  }

  render() {
    return (
      <tr>
        <td className={style.cell}>
          {this.props.regionName}
        </td>
        <td className={style.cell}>
          <NumericInput
            className="table-input"
            value={this.props.value}
            onBlur={this.handleInputBlur}
          />
        </td>
      </tr>
    )
  }
}

DataTableRow.propTypes = {
  regionName: PropTypes.string.isRequired,
  regionCode: PropTypes.string.isRequired,
  value: PropTypes.number,
  onRowEdit: PropTypes.func.isRequired,
}
