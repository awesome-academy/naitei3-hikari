import * as types from './actionTypes'
import axios from 'axios'
let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3001'