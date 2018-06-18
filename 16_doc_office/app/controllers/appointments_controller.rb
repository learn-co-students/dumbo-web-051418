class AppointmentsController < ApplicationController
  def new
    @appointment = Appointment.new
    @doctors = Doctor.all
  end

  def create
    # Doctor, Patient, and Date => Appointment
    doctor_id = appointment_params["doctor_id"]
    patient =  Patient.find_or_create_by(name: appointment_params[:patient]) do
      |patient| patient.age = 12
    end

    # binding.pry


    @appointment = Appointment.create(date: appointment_params["date"], doctor_id: doctor_id, patient_id: patient.id)

    if @appointment.valid?
        redirect_to @appointment
    else
        # If *rendering* the new form, we will need to have
        # the collection (aka the doctor roster) for our collection selection
        # @doctors = Doctor.all

        flash[:error] = @appointment.errors.full_messages

        render :new
    end

    # binding.pry
  end

  def show
    @appointment = Appointment.find(params[:id])
    render :show
  end

  private
  def appointment_params
    params.require(:appointment).permit(:date, :doctor_id, :patient)
  end
end
