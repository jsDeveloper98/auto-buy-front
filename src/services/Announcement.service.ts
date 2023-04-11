// TODO: finish announcements service creation

class AnnouncementS {
  async create(values: FormData) {
    try {
      console.log("%c values ===>", "color: #90ee90", values);
      const res = await fetch("http://localhost:3000/announcements", {
        method: "POST",
        body: values,
      });

      console.log("%c res ===>", "color: #90ee90", res);

      const jsonRes = await res.json();

      console.log("%c jsonRes ===>", "color: #90ee90", jsonRes);

      if (!res.ok) {
        throw new Error(jsonRes.message);
      }

      return jsonRes;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export const AnnouncementService = new AnnouncementS();
