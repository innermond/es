import React, {Component} from 'react'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'

let a = new Date(), z = new Date(), x = 7
a.setDate(a.getDate() - (x + 1))
z.setDate(z.getDate() - 1)
function disableAllExcept (date) {
  // allow only last x days
  return !(date > a && date < z)
}

let menuItems = [
  {val:0, text: 'from'},
  {val:0, text: 'to'},
  {val:0, text: 'bytes'},
  {val:0, text: 'ips'}
]

class Criterion extends Component {

  state = {value: 1}

  constructor(props) {
	super(props)
	
	this.props = props
  }

  handleChange = (e, i, value) => {
	this.setState({value}) 
  }


  render() {
  return (
  <div style={this.props.style}>
  <TextField id="criterionField" disabled={true} defaultValue={this.props.field} style={{width:'auto'}} />
  <SelectField value={this.state.value} onChange={this.handleChange} style={{width:'9em'}}>
	<MenuItem key='with' value={1} primaryText='with' leftIcon={<AddIcon/>} />
	<MenuItem key='without' value={2} primaryText='without' leftIcon={<RemoveIcon/>} />
  </SelectField>
  <TextField hintText='Enter your search' key={this.props.field} />
  <FlatButton onClick={() => this.props.removeHandler(this.props.id)} icon={<DeleteIcon/>} style={{color:'red'}} />
  </div>
  )
  }
}

class TemplateName extends Component {

 
  constructor(props) {
	super(props)

	this.state = {criterions: []}
	this.wrapStyle = {display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end'}
  }

  addCriterion = (e) => {
	let newState = Object.assign({}, this.state)
	newState.criterions.push(e.target.textContent)
	this.setState(newState)
  }

  removeCriterion = (inx) => {
	let newState = Object.assign({}, this.state)
	newState.criterions.splice(inx, 1)
	this.setState(newState)
  }

  render() {
	return (
<div>
  <div style={this.wrapStyle}>
	<TextField id='templatePrefix' defaultValue='smtp-transaction-' disabled={true} style={{width:'8em'}} />
	<DatePicker
	  hintText={z.toISOString().slice(0, 10)}
	  autoOk={true}
	  shouldDisableDate={disableAllExcept}
	  textFieldStyle={{width:'6em'}}
	/>
	<SelectField floatingLabelText='choose a field' onChange={this.addCriterion} >
	{menuItems.map((item, i) => {
	  return <MenuItem key={`${i}.${item.val}`} value={item.val} primaryText={item.text} />
	})}
	</SelectField>
  </div>	
  <div>
  {this.state.criterions.length && this.state.criterions.map((c, i) => <Criterion key={`${i}.${c}`} field={c} style={this.wrapStyle} id={i} removeHandler={i => this.removeCriterion(i)} /> )}
  </div>	
</div>)
  }
}
export default TemplateName
