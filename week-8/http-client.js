/* Title: Assignment 8.2 - WhatABook, Part 2
  Author: April Yang
  Date: 07/16/2022
Description: Create and export HttpClient class
  */

// Create HttpClient class.
export class HttpClient {
  async get(url, params = "") {
    // Creates New URL object.
    url = new URL(url);
    // Assign url.search property to URLSearchParams object.
    url.search = new URLSearchParams(params);
    const res = await fetch(url.toString(), {
      method: "GET",
    });
    // Return res object as JSON.
    return res.json();
  }
}
