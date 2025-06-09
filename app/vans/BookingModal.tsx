"use client";
import { useState } from 'react';
import { Van } from '../../types';
import Image from 'next/image';

type BookingModalProps = {
  van: Van;
  isOpen: boolean;
  onClose: () => void;
};

type BookingFormData = {
  startDate: string;
  endDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

export default function BookingModal({ van, isOpen, onClose }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    startDate: '',
    endDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isBookingComplete, setIsBookingComplete] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotalPrice = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return van.pricePerDay * diffDays;
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a random booking reference
    const reference = 'HRV-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    setBookingReference(reference);
    
    setIsProcessing(false);
    setIsBookingComplete(true);
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setFormData({
      startDate: '',
      endDate: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
    });
    setIsBookingComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Van</h2>
          <button 
            onClick={resetAndClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isBookingComplete ? (
          <div className="p-8 text-center bg-white">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Booking Confirmed!</h3>
            <p className="mb-2 text-gray-700">Thank you for booking with Herivan.</p>
            <p className="mb-6 text-gray-700">Your booking reference: <span className="font-bold text-gray-900">{bookingReference}</span></p>
            <p className="text-sm text-gray-500 mb-6">A confirmation email has been sent to {formData.email}</p>
            <button 
              onClick={resetAndClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white">
            <div className="p-6">
              {/* Van Summary */}
              <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-24 h-24 relative rounded-md overflow-hidden mr-4">
                  <Image 
                    src={van.imageUrl} 
                    alt={van.name} 
                    fill 
                    style={{objectFit: 'cover'}} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{van.name}</h3>
                  <p className="text-gray-600">{van.tagline}</p>
                  <p className="font-bold text-primary">{van.pricePerDay} MAD/day</p>
                </div>
              </div>

              {/* Step Indicator */}
              <div className="flex justify-between mb-8">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                  <div className={`h-1 w-12 ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                  <div className={`h-1 w-12 ${currentStep >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                </div>
                <div className="text-sm text-gray-500">
                  {currentStep === 1 && 'Dates'}
                  {currentStep === 2 && 'Your Details'}
                  {currentStep === 3 && 'Payment'}
                </div>
              </div>

              {/* Step 1: Date Selection */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Select Your Dates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input 
                        type="date" 
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input 
                        type="date" 
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        min={formData.startDate || new Date().toISOString().split('T')[0]}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                  </div>

                  {formData.startDate && formData.endDate && (
                    <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
                      <h4 className="font-medium mb-2 text-gray-900">Booking Summary</h4>
                      <div className="flex justify-between mb-1 text-gray-700">
                        <span>Daily Rate:</span>
                        <span>{van.pricePerDay} MAD</span>
                      </div>
                      <div className="flex justify-between mb-1 text-gray-700">
                        <span>Number of Days:</span>
                        <span>
                          {(() => {
                            const start = new Date(formData.startDate);
                            const end = new Date(formData.endDate);
                            const diffTime = Math.abs(end.getTime() - start.getTime());
                            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                          })()}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-gray-300 text-gray-900">
                        <span>Total:</span>
                        <span>{calculateTotalPrice()} MAD</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Payment Details</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input 
                      type="text" 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      maxLength={19}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input 
                        type="text" 
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        maxLength={5}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input 
                        type="text" 
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        maxLength={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
                    <h4 className="font-medium mb-2 text-gray-900">Payment Summary</h4>
                    <div className="flex justify-between mb-1 text-gray-700">
                      <span>Total Amount:</span>
                      <span>{calculateTotalPrice()} MAD</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      <p>This is a mock payment system. No real payment will be processed.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-between bg-white">
              {currentStep > 1 ? (
                <button 
                  type="button"
                  onClick={handlePrevStep}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700"
                >
                  Back
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700"
                >
                  Cancel
                </button>
              )}

              {currentStep < 3 ? (
                <button 
                  type="button"
                  onClick={handleNextStep}
                  className="btn-primary"
                  disabled={currentStep === 1 && (!formData.startDate || !formData.endDate)}
                >
                  Continue
                </button>
              ) : (
                <button 
                  type="submit"
                  className="btn-primary flex items-center"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Complete Booking'
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}