import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLdr } from "../redux/slice/ldrSlice";

export default function LdrSensor() {
  const { value } = useSelector((state) => state.ldr);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getLdr());
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="">
            {value > 100 ? (
              <img className="w-[30px] h-[30px]" src="sun.png" alt="" />
            ) : (
              <img className="w-[30px] h-[30px]" src="cloud.png" alt="" />
            )}
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h2 className="font-bold uppercase text-gray-600">
            Cảm biến ánh sáng
          </h2>
          <p className="font-bold text-2xl">
            {value < 100 ? "Trời tối" : "Trời sáng"}
            <span className="text-green-500">
              <i className="fas fa-caret-up"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
