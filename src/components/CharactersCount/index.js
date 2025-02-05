import {useState} from 'react'
import {v4} from 'uuid'

import {
  AppContainer,
  CharacetersDisplayContainer,
  CharacetersDisplayContainerHeadingContainer,
  CharacetersDisplayContainerHeading,
  CharactersContainer,
  ListItem,
  WordLength,
  Image,
  CountContainer,
  CountContainerHeading,
  InputContainer,
  Input,
  Button,
} from './styledComponents'

const CharactersCount = () => {
  const [text, setTextFn] = useState('')
  const [wordsList, setWordsListFn] = useState([])

  const onChangeText = event => {
    setTextFn(event.target.value)
  }

  const addText = event => {
    event.preventDefault()
    const word = {
      id: v4(),
      text,
      textLength: text.length,
    }
    if (word.text !== '') {
      setWordsListFn(prevState => [...prevState, word])
      setTextFn('')
    }
  }

  return (
    <AppContainer>
      <CharacetersDisplayContainer>
        <CharacetersDisplayContainerHeadingContainer>
          <CharacetersDisplayContainerHeading>
            Count the Characters like a Boss...
          </CharacetersDisplayContainerHeading>
        </CharacetersDisplayContainerHeadingContainer>
        {wordsList.length > 0 ? (
          <CharactersContainer>
            {wordsList.map(eachWord => (
              <ListItem key={eachWord.id}>
                <WordLength>{`${eachWord.text}: ${eachWord.textLength}`}</WordLength>
              </ListItem>
            ))}
          </CharactersContainer>
        ) : (
          <Image
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        )}
      </CharacetersDisplayContainer>
      <CountContainer>
        <CountContainerHeading>Character Counter</CountContainerHeading>
        <InputContainer onSubmit={addText}>
          <Input
            value={text}
            type="text"
            placeholder="Enter the Characters here"
            onChange={onChangeText}
          />
          <Button type="submit">Add</Button>
        </InputContainer>
      </CountContainer>
    </AppContainer>
  )
}

export default CharactersCount
