export const buildUrl = ({category, difficulty, numQuestions}) => {
    const API_URL = "https://the-trivia-api.com/v2/questions"
    // Construct the API URL based on user selections
    let url = `${API_URL}?`

    if (category) {
        url += `categories=${category}`
    }
    if (difficulty) {
        url += `&difficulties=${difficulty}`
    }
    if (numQuestions) {
        url += `&limit=${numQuestions}` // Assuming API uses 'limit' for questions
    }

    return url //Handles special characters like spaces in categories

}