
export const SearchUser = `select * from d_users_details where user=$1 and contraseña=$2 limit 1`