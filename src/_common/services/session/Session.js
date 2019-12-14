import AsyncStorage from '@react-native-community/async-storage';

const { clear, getItem, setItem } = AsyncStorage;

class Session {
  static Session = undefined;

  static SessionKey = '@session';

  static async getSession() {
    if (!Session.Session) {
      try {
        Session.Session = JSON.parse(await getItem(Session.SessionKey)) || {};
      } catch {
        Session.Session = {};
      }
    }

    return Session.Session;
  }

  static async getToken() {
    const { token } = await Session.getSession();

    return token;
  }

  static async putToken(token) {
    const session = await Session.getSession();
    session.token = token;

    await setItem(Session.SessionKey, JSON.stringify(session));

    Session.Session = session;

    return true;
  }

  static async getUser() {
    const { user } = await Session.getSession();

    return user;
  }

  static async putUser(user) {
    const session = await Session.getSession();
    session.user = user;

    await setItem(Session.SessionKey, JSON.stringify(session));

    Session.Session = session;

    return true;
  }

  static async clear() {
    await clear();
  }
}

export default Session;
