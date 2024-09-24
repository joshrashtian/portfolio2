"use server";

import axios from "axios";

const masterLink = "https://api.github.com/repos/joshrashtian/portfolio2/branches/main"

export async function getVersion() {
  return axios.get(masterLink).then((res) => res.data.commit.sha.slice(0, 7));
}
