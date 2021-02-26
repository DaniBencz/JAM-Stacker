
import { connect } from "react-redux"
import { eatAction, stackAction } from "../redux/actions"
import Display from "./display"

const mapStateToProps = state => {
  return {
    jam: state.jam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		stackJam: () => {
			dispatch(stackAction(1))
		},
    eatJam: () => {
      dispatch(eatAction(1))
    },
  }
}

const Display_container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display)

export default Display_container