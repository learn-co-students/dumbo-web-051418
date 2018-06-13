class DoctorsController < ApplicationController
  # Methods known as actions
  # This is how our user/db talk to one another

  def index
    @doctors = Doctor.all
    render :index
  end

  def show
    @doctor = Doctor.find(params[:id])
    render :show
  end

  def new
    @doctor = Doctor.new
    render :new
  end

  def create
    doctor = Doctor.create(doctor_params)

    # redirect_to doctor_path(@doctor)
    # redirect_to @doctor
    redirect_to doctor_url(doctor)
  end

  def edit
    @doctor = Doctor.find(params[:id])

    render :edit
  end

  def update
    @doctor = Doctor.find(params[:id])
    @doctor.update(doctor_params)

    redirect_to doctors_path
  end

  private
  def doctor_params
    params.require(:doctor).permit(:name, :specialty)
  end
end
