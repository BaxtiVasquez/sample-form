import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const submission = {
      name: formData.get('name'),
      question: 'How many times do you...?',
      answer: Number(formData.get('answer')),
      dateTime: new Date().toISOString(),
    }

    JSON.stringify(submission)
    setAnswer(submission.answer)
  }

  return (
    <main>
      <header className="brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '0px', padding: '0px' }}>
        <img src="/logo.png" alt="Aidea" />
        <p style={{ fontFamily: 'Arial', fontSize: '20px', marginBottom: '0', padding: '0' }}>Together, we design what's next.</p>
      </header>
      <form onSubmit={handleSubmit} style={{marginTop: '1px' }}>
        <div className="form-container">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <p>How many times do you...?</p>
          <input
            id="answer"
            name="answer"
            type="number"
            min="0"
            step="1"
            placeholder="Enter a number"
            required
          />

          <button type="submit">Submit</button>
        </div>
      </form>
      {answer !== '' && <p>{answer} times a week</p>}
    </main>
  )
}

export default App
