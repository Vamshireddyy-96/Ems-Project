package com.yash.ems.exception;

public class UserFoundException  extends  Exception{

    public UserFoundException() {
        super("This is Alredy Registered!!!");
    }

    public UserFoundException(String msg)
    {
        super(msg);
    }
}
