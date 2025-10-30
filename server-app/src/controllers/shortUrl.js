import express from "express";
import urlModel from "../models/shortUrl.js";

export const createUrl = async (req, res) => {
  try {
    console.log("The Full Url Is ", req.body.fullUrl);
    const { fullUrl } = req.body;
    const urlFound = await urlModel.find({ fullUrl });

    if (urlFound.length > 0) {
      res.status(409);
      res.send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ fullUrl });
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    res.status(500).send({ message: "Something Went Wrong!!!" });
  }
};
export const getAll = async (req, res) => {
  try {
    const shortUrls = await urlModel.find();
    if (shortUrls.length < 0) {
      res.status(404).send({ message: "Short Urls Not Found!!!" });
    } else {
      res.status(200).send(shortUrls);
    }
  } catch (error) {
    res.status(500).send({ message: "Something Went Wrong!!!" });
  }
};
export const getUrl = async (req, res) => {};
export const deleteUrl = async (req, res) => {};
