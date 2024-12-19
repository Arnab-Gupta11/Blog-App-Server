import { User } from '../user/user.model';

//Block User
const BlockUserIntoDB = async (id: string) => {
  const result = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );
  return result;
};

export const AdminServices = {
  BlockUserIntoDB,
};
