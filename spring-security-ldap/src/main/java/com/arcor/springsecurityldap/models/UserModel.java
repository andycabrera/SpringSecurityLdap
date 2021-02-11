package com.arcor.springsecurityldap.models;

public class UserModel {

    private String username;

    private String password;

    public UserModel (String name, String password){
        this.username = name;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
