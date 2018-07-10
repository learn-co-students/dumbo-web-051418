class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :priority

  def list_name
    # object is thing currently being serialized
    object.list.name
  end
end
