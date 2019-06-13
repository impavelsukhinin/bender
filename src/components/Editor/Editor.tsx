import React from 'react'
import { Editor as DraftEditor, EditorState } from 'draft-js'

const Editor = () => {
	const [editorState, setEditorState] = React.useState(EditorState.createEmpty())

	const editor = React.useRef(null)

	const focusEditor = () => {
		editor.current.focus()
	}

	const onChange = (edState: EditorState) => {
		// console.log(edState.getCurrentContent().getPlainText())
		setEditorState(edState)
	}

	React.useEffect(() => {
		focusEditor()
	}, [])

	return (
		<DraftEditor
			ref={editor}
			editorState={editorState}
			onChange={onChange}
		/>
	)
}


export default Editor
