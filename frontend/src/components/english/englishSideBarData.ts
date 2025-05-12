import type { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'

interface EnglishData {
  title: string
  path: string
  tableOfContents?: AnchorLinkItemProps[]
}

export const englishData: EnglishData[] = [
  {
    title: 'UNIT 1: Cấu trúc trong tiếng Anh',
    path: 'unit_1',
    tableOfContents: [
      {
        key: 'grammar',
        title: 'I. Grammar',
        href: '#grammar',
        children: [
          {
            key: 'struct',
            title: '1. Những thành phần cơ bản để cấu tạo thành câu',
            href: '#struct',
            children: [
              {
                key: 'subject',
                title: 'a. Chủ ngữ (Subject - S)',
                href: '#subject',
              },
              {
                key: 'verb',
                title: 'b. Động từ (Verb - V)',
                href: '#verb',
              },
              {
                key: 'object',
                title: 'c. Tân từ (Object - O)',
                href: '#object',
              },
              {
                key: 'complement',
                title: 'd. Bổ ngữ (Complement - C)',
                href: '#complement',
              },
              {
                key: 'adverbial',
                title: 'e. Trạng ngữ (Adverbial - A)',
                href: '#adverbial',
              },
            ],
          },
          {
            key: 'structBasic',
            title: '2. Các thành phần câu cơ bản',
            href: '#struct_basic',
            children: [
              {
                key: 'subject_object',
                title: 'a. Subject - Object (S - V)',
                href: '#subject_object',
              },
              {
                key: 'subject_verb_object',
                title: 'b. Subject - Verb - Object (S - V - O)',
                href: '#subject_verb_object',
              },
              {
                key: 'subject_verb_object_object',
                title: 'c. Subject - Verb - Object - Object (S - V - O - O)',
                href: '#subject_verb_object_object',
              },
              {
                key: 'subject_verb_object_complement',
                title:
                  'd. Subject - Verb - Object - Complement (S - V - O - C)',
                href: '#subject_verb_object_complement',
              },
              {
                key: 'subject_verb_object_adverbial',
                title: 'f. Subject - Verb - Object - Adverbial (S - V - O - A)',
                href: '#subject_verb_object_adverbial',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Unit 2: Nouns & Pronouns',
    path: 'unit_2',
    tableOfContents: [
      {
        key: 'grammar',
        title: 'I. Grammar',
        href: '#grammar',
        children: [
          {
            key: 'unit_2_define',
            title: '1. Định nghĩa và phân loại danh từ (Nouns)',
            href: '#unit_2_define',
          },
          {
            key: 'unit_2_define_2',
            title: '2. Định nghĩa và phân loại đại từ (Pronouns)',
            href: '#unit_2_define_2',
          },
        ],
      },
    ],
  },
]
