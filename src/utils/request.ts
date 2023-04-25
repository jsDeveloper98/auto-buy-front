interface RequestOptions {
  body?: any;
  method?: string;
  headers?: { [key: string]: string };
}

interface IRequest {
  url: string;
  options: RequestOptions;
  serializeToJson?: boolean;
}

export const request = async <T>({
  url,
  serializeToJson = true,
  options = { method: "GET" },
}: IRequest): Promise<T> => {
  try {
    if (serializeToJson) {
      options.headers = options.headers || {};
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(options.body);
    }

    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data as T;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
