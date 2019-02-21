const got = require('got')
const states = require('./data/cities.json')

const _parseSessions = (sessions) => {
  return sessions.map(session => {
    return session.sessions.map(schedule => {
      return {
        type: schedule.type,
        time: schedule.time
      }
    })[0]
  })
}

const _parseData = (json) => {
  return json[0].movies.map(movie => {
    return {
      title: movie.title,
      censorship: movie.contentRating,
      sessions: _parseSessions(movie.rooms),
      poster: movie.images[0].url
    }
  })
}

const getTodayDate = () => {
  let today = new Date()
  return `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
}

const getByCity = async (city) => {
  try {
    const response = await got(`https://api-content.ingresso.com/v0/sessions/city/68/theater/437?partnership=&date=${getTodayDate()}`)

    return _parseData(JSON.parse(response.body))
  } catch (error) {
    throw error
  }
}

const _parseCitiesFromStates = (states) => {
  let cities = states.map(state => {
    return state.cities.map(city => {
      return city
    })
  })

  cities = cities.reduce((a, b) => a.concat(b))

  return cities
}

const getCities = () => {
  try {
    return _parseCitiesFromStates(states)
  } catch (error) {
    throw error
  }
}

const _parseStates = (states) => {
  let statesAcronyms = states.map(state => {
    return {
      name: state.name,
      uf: state.uf
    }
  })

  return statesAcronyms
}

const getStates = () => {
  try {
    return _parseStates(states)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getByCity,
  getCities,
  getStates
}
