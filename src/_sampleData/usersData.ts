import User from '_types/User'
import organizationsToUsersData from './organizationsToUsersData'

const usersDataById: { [key: number]: User } = {
  1: {
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe1',
    email: 'john@doe.com',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/3959008?v=3&s=40',
    userToOrganizations: organizationsToUsersData.byUserId[1],
    globalRole: 'admin',
  },
  2: {
    id: 2,
    fullName: '2',
    username: null,
    email: 'example@gmail.com',
    avatarUrl:
      'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
    userToOrganizations: organizationsToUsersData.byUserId[2],
  },
  3: {
    id: 3,
    fullName: 'Ana De Armas',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    userToOrganizations: organizationsToUsersData.byUserId[3],
  },
  4: {
    id: 4,
    fullName: 'Ana De Armas',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    userToOrganizations: organizationsToUsersData.byUserId[4],
  },
  5: {
    id: 5,
    fullName: 'Sonequa Martin-Green',
    email: 'Sonequa+Martin+Green@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    userToOrganizations: organizationsToUsersData.byUserId[5],
  },
}

const usersData = {
  byId: usersDataById,
  current: usersDataById[1],
}

export default usersData