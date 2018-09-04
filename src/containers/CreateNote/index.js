import CreateNote from "./createNote";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions/notesAction";

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNote);
