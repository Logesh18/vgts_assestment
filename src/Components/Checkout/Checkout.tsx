import { useDispatch, useSelector } from 'react-redux';
import Counter from '../Counter/Counter';
import NoImage from '../../assets/icon-no-image.jpg';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import { Input, Button, Form } from 'antd';
import PhoneInput from "antd-phone-input";
import { purchaseMeal } from '../../Redux/Actions/checkoutAction';
const { TextArea } = Input;

const Checkout = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const {meal} = useSelector((state: any) => state.checkout);
  const [form] = Form.useForm();
  const {items} = useSelector((state: any) => state.counter);
  type FieldType = {
    name?: string;
    email?: string;
    phoneNo?: any;
    address?: string;
    totalPrice?: number;
  };

  useEffect(() => {
    if(!meal.length) {
      navigate('/home');
    }
  }, [navigate, meal]);

  const purchase = (values: FieldType) => {
    values.totalPrice = meal[0]?.price * items;
    const payload: any = [
        {
          ...meal[0],
          ...values
        }
    ];
    dispatch(purchaseMeal(payload));
    navigate("/purchase");
  };

  const validator = (_: any, {valid} : {valid: any}) => {
    if (valid()) {
      return Promise.resolve();
    }
    return Promise.reject("Invalid phone number");
  }

  return (
    <>
      <Header searchBar = {false}/>
      {
        !meal?.length ? <Loader /> : 
        <div className="App">
          <div className = "App PurchaseContainer">
              <div className = "App ImageContainer">
                  <img className = "ImageTag" 
                    src={ meal[0]?.strMealThumb ? meal[0].strMealThumb : NoImage} 
                    alt={ meal[0]?.strMeal } 
                  />
              </div>
              
              <div className = "CounterContainer">
                  
                  <div className="TitleContainer">
                    <span className="MealsTitleTag">
                      { meal[0]?.strMeal } 
                    </span>
                    <span className="MealsAreaTag">
                      ({ meal[0]?.strArea })
                    </span>
                  </div>
                  
                  <Counter/>
                  
                  <div className="TitleContainer MealsTitleTag">
                    <span>
                      Total Price: 
                    </span>
                    <span className="Price">
                      &#8377; { meal[0]?.price * items }
                    </span>
                  </div>

                  <div className="FormContainer">
                      <Form
                        layout="vertical"
                        form={form}
                        initialValues={{ layout: "vertical" }}
                        style={{ width: '600' }}
                        onFinish={purchase}
                        autoComplete="off"
                      >
                          <Form.Item<FieldType> label="Name" name = "name"
                            rules={[{
                              required: true, 
                              message: 'Name is required!' 
                            }]}
                          >
                              <Input type="text" placeholder="Enter your Name" />
                          </Form.Item>
                          <Form.Item<FieldType> label="Email" name = "email"
                            rules={[{ 
                              type: "email",
                              required: true, 
                              message: 'Enter valid email id!' 
                            }]}
                          >
                              <Input type="text" placeholder="Enter your email..." />
                          </Form.Item>
                          <Form.Item<FieldType> label="Phone No" name = "phoneNo"
                            rules={[{
                              validator,
                              message: "Invalid phone number",
                            }]}
                          >
                              <PhoneInput 
                                country='in'
                                placeholder = "Enter your phone number..." 
                                enableSearch
                              />
                          </Form.Item>
                          <Form.Item<FieldType> label="Address" name = "address"
                            rules={[{ 
                              required: true, 
                              message: 'Address is required!' 
                            }]}
                          >
                              <TextArea placeholder="Enter your address..." rows={4} />
                          </Form.Item>
                          <Form.Item >
                            <Button 
                              type="primary"
                              htmlType="submit"
                              disabled={items > 0 ? false : true}
                              size="large" 
                              className = "CheckoutButton"
                            >
                                Purchase
                            </Button>
                          </Form.Item>
                      </Form>
                  </div>

              </div>

          </div>
        </div>
      }
    </>
  );
}

export default Checkout;