export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.setState(q => ({      isToggleOn: !q.isToggleOn    }));  
  }

  render() {
    return (
      <button onClick={this.handleClick}>        
        {this.state.isToggleOn ? 'ON' : 'OFF' + this.props.name}
      </button>
    );
  }

}