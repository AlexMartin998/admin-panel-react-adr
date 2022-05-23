export interface FormInput {
  id: number;
  label: string;
  type: string;
  placeholder?: string;
  htmlFor?: string;
}

export const userInputs: FormInput[] = [
  {
    id: 1,
    label: 'Username',
    type: 'text',
    placeholder: 'john_doe',
    htmlFor: 'username',
  },
  {
    id: 2,
    label: 'Name and surname',
    type: 'text',
    placeholder: 'John Doe',
    htmlFor: 'name_surname',
  },
  {
    id: 3,
    label: 'Email',
    type: 'mail',
    placeholder: 'john_doe@gmail.com',
    htmlFor: 'email',
  },
  {
    id: 4,
    label: 'Phone',
    type: 'text',
    placeholder: '+1 234 567 89',
    htmlFor: 'phone',
  },
  {
    id: 5,
    label: 'Password',
    type: 'password',
    htmlFor: 'password',
  },
  {
    id: 6,
    label: 'Address',
    type: 'text',
    placeholder: 'Elton St. 216 NewYork',
    htmlFor: 'address',
  },
  {
    id: 7,
    label: 'Country',
    type: 'text',
    placeholder: 'USA',
    htmlFor: 'country',
  },
];

export const productInputs: FormInput[] = [
  {
    id: 1,
    label: 'Title',
    type: 'text',
    placeholder: 'Apple Macbook Pro',
    htmlFor: 'title',
  },
  {
    id: 2,
    label: 'Description',
    type: 'text',
    placeholder: 'Description',
    htmlFor: 'description',
  },

  // Select with opts
  {
    id: 3,
    label: 'Category',
    type: 'text',
    placeholder: 'Computers',
    htmlFor: 'category',
  },
  {
    id: 4,
    label: 'Price',
    type: 'text',
    placeholder: '100',
    htmlFor: 'price',
  },
  {
    id: 5,
    label: 'Stock',
    type: 'text',
    placeholder: 'in stock',
    htmlFor: 'stock',
  },
];
