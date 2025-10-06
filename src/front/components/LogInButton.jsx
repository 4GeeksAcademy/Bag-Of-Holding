import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const LoginButton = () => {
  return (
    <Link to="/login" className="accent btn btn-primary">
      LOGIN
    </Link>
  );
};