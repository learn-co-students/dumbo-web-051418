import React from 'react'

class LanguageInput extends React.Component {
  state = {
    text: "",
    lang: "en"
  }

  languages = [
    { key: 'en', name: "English" },
    { key: 'fr', name: "French" },
    { key: 'jp', name: "Japanese" },
    { key: 'sw', name: "Swahili" }
  ]

  render() {
    const options = this.languages.map((lang) => {
      return <option value={lang.key} key={lang.key}>{lang.name}</option>
    })
    return (
      <form>
        <textarea value={this.props.text} onChange={(e) => this.props.onMyChange(e.target.value, 'text')} />
        <select value={this.props.lang} onChange={(e) => this.props.onMyChange(e.target.value, 'lang')}>
          {options}
        </select>
      </form>
    )
  }
}

export default LanguageInput;
