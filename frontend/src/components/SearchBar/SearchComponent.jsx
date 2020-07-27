import React from "react";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
import Autosuggest from "react-autosuggest";
import "./style.css";

export default class SearchComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }
  componentDidUpdate(){
    this.state.suggestions.map(suggestion => {
      this.styling(suggestion)
    })
  }
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  handleImage = (picture) =>{
    if(picture == null){
      return "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/33db51b709c04b279a1826b3bbf0faf2.png"
    }
    return picture
  }

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("\\b" + escapedValue, "i");

    return Object.values(this.props.users).filter((person) => regex.test(this.getSuggestionValue(person)));
  }

  getSuggestionValue = suggestion => {
    return `${suggestion.username}`;
  }
  styling = (suggestion) =>   {
    const style = document.getElementsByClassName(suggestion.username)[0].style;
    style.backgroundImage = `url(${this.handleImage(suggestion.picture)})`
    style.backgroundSize = '48px'
  }
  renderSuggestion = (suggestion, {query}) => {
    const suggestionText = `${suggestion.username}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
      <span className={"suggestion-content " + suggestion.username} onClick={() => this.props.history.push(`/users/${suggestion.username}`)}>
        <span className="name">
          {parts.map((part, index) => {
            const className = part.highlight ? "highlight" : null;

            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            );
          })}
        </span>
      </span>
    );
  }
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Find channels, stream, ...",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
