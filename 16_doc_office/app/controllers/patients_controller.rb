class PatientsController < ApplicationController
  def index
    @patients = Patient.all
    render :index
  end

  def show
    @patient = Patient.find(params[:id])
    render :show
  end

  def new
    @patient = Patient.new
    render :new
  end

  def create
    patient = Patient.create(patient_params)

    # redirect_to patient_path(@patient)
    # redirect_to @patient
    redirect_to patient_url(patient)
  end

  def edit
    @patient = Patient.find(params[:id])

    render :edit
  end

  def update
    @patient = Patient.find(params[:id])
    @patient.update(patient_params)

    redirect_to patients_path
  end

  private
  def patient_params
    params.require(:patient).permit(:name, :age)
  end

end
