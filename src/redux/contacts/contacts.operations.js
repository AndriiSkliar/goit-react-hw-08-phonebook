import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/auth.operations';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = { position: "top-center", autoClose: 3000 };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (err) {
       return rejectWithValue(
        "Oops... Something went wrong =(. Please, reload page and try again"
      );
    }
  }
  );

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, {rejectWithValue}) => {
    try {
      const { data } = await instance.post('/contacts', newContact);
      toast.success("Contact has been added to your book", toastOptions);

      return data;
    } catch (error) {
      toast.error(
        "Oops... Something went wrong =(. Please, reload page and try again",
        toastOptions
      );
    }

    return rejectWithValue(
        "Oops... Something went wrong =(. Please, reload page and try again"
      );
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, {rejectWithValue}) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`)
      toast.success("Contacts has been deleted from your book", toastOptions);

      return data;
    } catch (error) {
      toast.error(
        "Oops... Something went wrong =(. Please, reload page and try again",
        toastOptions
      );

      return rejectWithValue(
        "Oops... Something went wrong =(. Please, reload page and try again"
      );
    }
  }
);
