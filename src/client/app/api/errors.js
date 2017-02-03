export const ErrorStatus = {
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  gone: 410,
  internalServerError: 500,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
  networkError: 9000,  // 通信できない
  typeError: 9998,
  syntaxError: 9999,
};

export async function filterError(res) {
  const {status} = res;

  switch (status) {
    case ErrorStatus.unauthorized: {
      throw new Error({
        title: '認証エラー',
        status: ErrorStatus.unauthorized,
        messages: ['認証が無効になりました。もう一度ログインしなおしてください。'],
        payload: {}
      });
    }
    case ErrorStatus.badGateway: {
      throw new Error({
        title: 'メンテナンス',
        status: ErrorStatus.badGateway,
        messages: ['ただいまサーバのメンテナンス中です。恐れ入りますが、しばらくしてから再度お試しください。'],
        payload: {}
      });
    }
    case ErrorStatus.notFound: {
      const resultJson = await res.json();
      throw new Error({
        title: '',
        status: ErrorStatus.notFound,
        messages: resultJson.messages || ['リクエストURLに対するリソースが見つかりませんでした。'],
        payload: {}
      });
    }
  }

  if (status >= ErrorStatus.badRequest) {
    const resultJson = await res.json();
    throw new Error({
      title: res.statusText,
      status,
      messages: resultJson.messages || [resultJson.message],
      payload: resultJson.error || {},
    });
  }

  // エラーはなかった。
  return res;
}

export async function handleError(e) {
  if (e.status) {
    // フィルタされたエラー（400／500系）
    return {error: e};
  }

  if (e instanceof SyntaxError) {
    return {
      error: {
        title: 'SyntaxError',
        status: ErrorStatus.syntaxError,
        messages: [e],
        payload: {}
      }
    };
  }

  // フィルタされなかったエラー（ネットワークエラーなどは、ここに来る）
  return {
    error: {
      title: 'ネットワークエラー',
      status: ErrorStatus.networkError,
      messages: ['通信環境の良い場所でお試しください'],
      payload: {}
    }
  };
}
