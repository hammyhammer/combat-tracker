import axios from 'axios';

export const getEquipment = () => {
  axios({
    method: 'get',
    url: `https://www.dnd5eapi.co/api/equipment`,
  }).then((response) => {
    return response.data
  })
    .catch((error) => {
      console.log(error)
    })
}