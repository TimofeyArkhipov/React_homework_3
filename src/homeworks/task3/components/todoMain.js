import React, { Component } from 'react'
import '../css/todo.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import List from './list';
// import ThemeOptions from "./theme";


export default function Todo(toggleTheme, theme){
        // const muiTheme = createMuiTheme(ThemeOptions[theme]);
        return (
                <div className="wrapper">
                    <List />
                </div>
        );
}