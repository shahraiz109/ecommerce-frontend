import React, { useState } from "react";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { loadSeller } from "../../redux/actions/user";
import { AiOutlineDelete } from "react-icons/ai";

const ShopMoney = () => {
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    bankCountry: "",
    bankSwiftCode: null,
    bankAccountNumber: "",
    bankHolderName: "",
    bankAddress: "",
  });

  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const withdrawMethod = {
      bankName: bankInfo.bankName,
      bankCountry: bankInfo.bankCountry,
      bankSwiftCode: bankInfo.bankSwiftCode,
      bankAccountNumber: bankInfo.bankAccountNumber,
      bankHolderName: bankInfo.bankHolderName,
      bankAddress: bankInfo.bankAddress,
    };
    setPaymentMethod(false)

    await axios
      .put(`${server}/shop/update-payment-methods`, {
        withdrawMethod,
      })
      .then((res) => {
        toast.success("withdraw added successfully");
        dispatch(loadSeller());
        setBankInfo({
          bankName: "",
          bankCountry: "",
          bankSwiftCode: null,
          bankAccountNumber: "",
          bankHolderName: "",
          bankAddress: "",
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

   const availableBalance = seller?.availableBalance.toFixed(2);

  return (
    <div className="w-full h-[90vh] p-8">
      <div className="w-full h-full bg-white rounded flex items-center justify-center flex-col">
        <h5 className="text-[18px] pb-4">Availabe Balance: $({12233})</h5>
        <div
          className={`${styles.button} text-white !h-[40px] !rounded`}
          onClick={() => setOpen(true)}
        >
          Withdraw
        </div>
      </div>

      {open && (
        <div className="w-full h-screen z-[9999] fixed top-0 left-0 flex items-center justify-center bg-gray-400">
          <div
            className={`w-[95%] 800px:w-[50%] bg-white shadow rounded ${
              paymentMethod ? "h-[80vh] overflow-y-scroll" : "h-[unset]"
            } min-h-[40vh] p-5`}
          >
            <div className="w-full flex justify-end">
              <RxCross1
                size={25}
                onClick={() => setOpen(false) || setPaymentMethod(false)}
                className="cursor-pointer"
              />
            </div>

            {paymentMethod ? (
              <div>
                <h3 className="text-[18px] font-Poppins text-center font-[600]">
                  Add Your Withdraw Method:
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label>
                      Bank name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id=""
                      required
                      value={bankInfo.bankName}
                      onChange={(e) =>
                        setBankInfo({ ...bankInfo, bankName: e.target.value })
                      }
                      placeholder="enter your bank  name"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <div className="mt-2">
                    <label>
                      Bank Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id=""
                      required
                      value={bankInfo.bankCountry}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankCountry: e.target.value,
                        })
                      }
                      placeholder="enter your bank country!"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <div className="mt-2">
                    <label>
                      Bank Swift Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id=""
                      required
                      value={bankInfo.bankSwiftCode}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankSwiftCode: e.target.value,
                        })
                      }
                      placeholder="enter your bank  swift code"
                      className={`${styles.input} mt-2`}
                    />
                  </div>

                  <div className="mt-2">
                    <label>
                      Bank Account Number{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id=""
                      required
                      value={bankInfo.bankAccountNumber}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankAccountNumber: e.target.value,
                        })
                      }
                      placeholder="enter your bank account number"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <div className="mt-2">
                    <label>
                      Bank Holder Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id=""
                      required
                      value={bankInfo.bankHolderName}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankHolderName: e.target.value,
                        })
                      }
                      placeholder="enter your bank holder name"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <div className="mt-2">
                    <label>
                      Bank Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id=""
                      required
                      value={bankInfo.bankAddress}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankAddress: e.target.value,
                        })
                      }
                      placeholder="enter your bank address"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`${styles.button} mb-3 my-2 text-white`}
                  >
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <>
                <h3 className="text-[22px] font-Poppins">
                  Available Withdraw Methods:
                </h3>

                {seller && seller?.withdrawMethod ? (
                  <div>
                    <div className="800px:flex w-full justify-between items-center">
                      <div className="800px:w-[50%]">
                        <h5>
                          Account Number:{" "}
                          {"*".repeat(
                            seller?.withdrawMethod.bankAccountNumber.length - 3
                          ) +
                            seller?.withdrawMethod.bankAccountNumber.slice(-3)}
                        </h5>
                        <h5>Bank Name: {seller?.withdrawMethod.bankName}</h5>
                      </div>
                      <div className="800px:w-[50%]">
                        <AiOutlineDelete
                          size={25}
                          className="cursor-pointer"
                          // onClick={() => deleteHandler()}
                        />
                      </div>
                    </div>
                    <br />
                    <h4>Available Balance: {availableBalance}$</h4>
                    <br />
                    <div className="800px:flex w-full items-center">
                      <input
                        type="number"
                        placeholder="Amount..."
                        // value={withdrawAmount}
                        // onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="800px:w-[100px] w-[full] border 800px:mr-3 p-1 rounded"
                      />
                      <div
                        className={`${styles.button} !h-[42px] text-white`}
                        // onClick={withdrawHandler}
                      >
                        Withdraw
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-[18px] pt-2">
                      No Withdraw Methods available!
                    </p>
                    <div className="w-full flex items-center ">
                      <div
                        className={`${styles.button} text-white text-[18px] mt-4`}
                        onClick={() => setPaymentMethod(true)}
                      >
                        Add New
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopMoney;
