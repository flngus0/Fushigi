#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    int temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    int temp_12;
    uint temp_13;
    uint temp_14;
    int temp_15;
    precise float temp_16;
    int temp_17;
    uint temp_18;
    uint temp_19;
    int temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    int temp_32;
    uint temp_33;
    uint temp_34;
    int temp_35;
    precise float temp_36;
    int temp_37;
    uint temp_38;
    int temp_39;
    precise float temp_40;
    int temp_41;
    uint temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    int temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270006 Mov
    // 0x000010: 0xEFD87F800807FF01 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400370003 Mov
    // 0x000030: 0xEFD87F801047FF10 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x3848000000470014 Shl
    temp_4 = temp_2 << 4;
    // 0x000048: 0xEFD87F800847FF02 Ald
    temp_5 = in_attr0.y;
    // 0x000050: 0x4C6810100007010D Fmul
    temp_6 = temp_0 * vp_c4.data[0].x;
    // 0x000058: 0xEFD87F800A07FF0E Ald
    temp_7 = in_attr2.x;
    // 0x000068: 0x4C6810100047010F Fmul
    temp_8 = temp_0 * vp_c4.data[1].x;
    // 0x000070: 0xEFD87F800907FF0C Ald
    temp_9 = in_attr1.x;
    // 0x000078: 0x4C68101000870101 Fmul
    temp_10 = temp_0 * vp_c4.data[2].x;
    // 0x000088: 0xEFD87F800887FF0A Ald
    temp_11 = in_attr0.z;
    // 0x000090: 0xEF94007068871408 Ldc
    temp_12 = temp_4 + 0x688;
    temp_13 = uint(temp_12) >> 2;
    temp_14 = temp_13 >> 2;
    temp_15 = int(temp_13) & 3;
    temp_16 = vp_c7.data[int(temp_14)][temp_15];
    // 0x000098: 0xEF94007048871409 Ldc
    temp_17 = temp_4 + 0x488;
    temp_18 = uint(temp_17) >> 2;
    temp_19 = temp_18 >> 2;
    temp_20 = int(temp_18) & 3;
    temp_21 = vp_c7.data[int(temp_19)][temp_20];
    // 0x0000A8: 0x51A0031400471006 Ffma
    temp_22 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0000B0: 0xEFD87F801007FF07 Ald
    temp_23 = in_attr8.x;
    // 0x0000B8: 0x51A0019400571010 Ffma
    temp_24 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0000C8: 0xEFD87F800A47FF13 Ald
    temp_25 = in_attr2.y;
    // 0x0000D0: 0x49A006900017020D Ffma
    temp_26 = fma(temp_5, vp_c4.data[0].y, temp_6);
    // 0x0000D8: 0xEFD87F800947FF0B Ald
    temp_27 = in_attr1.y;
    // 0x0000E8: 0x49A007900057020F Ffma
    temp_28 = fma(temp_5, vp_c4.data[1].y, temp_8);
    // 0x0000F0: 0xEFD87F800A87FF04 Ald
    temp_29 = in_attr2.z;
    // 0x0000F8: 0x49A0009000970215 Ffma
    temp_30 = fma(temp_5, vp_c4.data[2].y, temp_10);
    // 0x000108: 0xEFD87F800987FF05 Ald
    temp_31 = in_attr1.z;
    // 0x000110: 0xEF95007068071400 Ldc
    temp_32 = temp_4 + 0x680;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_33 >> 2;
    temp_35 = int(temp_33) & 3;
    temp_36 = vp_c7.data[int(temp_34)][temp_35];
    temp_37 = int(temp_33) + 1;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_37 & 3;
    temp_40 = vp_c7.data[int(temp_38)][temp_39];
    // 0x000118: 0xEF95007048071402 Ldc
    temp_41 = temp_4 + 0x480;
    temp_42 = uint(temp_41) >> 2;
    temp_43 = temp_42 >> 2;
    temp_44 = int(temp_42) & 3;
    temp_45 = vp_c7.data[int(temp_43)][temp_44];
    temp_46 = int(temp_42) + 1;
    temp_47 = uint(temp_46) >> 2;
    temp_48 = temp_46 & 3;
    temp_49 = vp_c7.data[int(temp_47)][temp_48];
    // 0x000128: 0x4C68101000070E11 Fmul
    temp_50 = temp_7 * vp_c4.data[0].x;
    // 0x000130: 0x4C68101000870E12 Fmul
    temp_51 = temp_7 * vp_c4.data[2].x;
    // 0x000138: 0x4C68101000470E0E Fmul
    temp_52 = temp_7 * vp_c4.data[1].x;
    // 0x000148: 0x4C68101000070C16 Fmul
    temp_53 = temp_9 * vp_c4.data[0].x;
    // 0x000150: 0x49A00A9000A70A15 Ffma
    temp_54 = fma(temp_11, vp_c4.data[2].z, temp_30);
    // 0x000158: 0x4C68101000870C18 Fmul
    temp_55 = temp_9 * vp_c4.data[2].x;
    // 0x000168: 0x49A0031400070706 Ffma
    temp_56 = fma(temp_23, vp_c5.data[0].x, temp_22);
    // 0x000170: 0x4C68101000470C19 Fmul
    temp_57 = temp_9 * vp_c4.data[1].x;
    // 0x000178: 0x49A0081400170707 Ffma
    temp_58 = fma(temp_23, vp_c5.data[0].y, temp_24);
    // 0x000188: 0x49A0089000171311 Ffma
    temp_59 = fma(temp_25, vp_c4.data[0].y, temp_50);
    // 0x000190: 0x49A0091000971312 Ffma
    temp_60 = fma(temp_25, vp_c4.data[2].y, temp_51);
    // 0x000198: 0x49A0071000571313 Ffma
    temp_61 = fma(temp_25, vp_c4.data[1].y, temp_52);
    // 0x0001A8: 0x49A0079000670A10 Ffma
    temp_62 = fma(temp_11, vp_c4.data[1].z, temp_28);
    // 0x0001B0: 0x49A00B1000170B0C Ffma
    temp_63 = fma(temp_27, vp_c4.data[0].y, temp_53);
    // 0x0001B8: 0x4C58101000B71516 Fadd
    temp_64 = temp_54 + vp_c4.data[2].w;
    // 0x0001C8: 0x49A00C1000970B0E Ffma
    temp_65 = fma(temp_27, vp_c4.data[2].y, temp_55);
    // 0x0001D0: 0x49A00C9000570B0B Ffma
    temp_66 = fma(temp_27, vp_c4.data[1].y, temp_57);
    // 0x0001D8: 0x49A0069000270A0F Ffma
    temp_67 = fma(temp_11, vp_c4.data[0].z, temp_26);
    // 0x0001E8: 0x49A008900027040D Ffma
    temp_68 = fma(temp_29, vp_c4.data[0].z, temp_59);
    // 0x0001F0: 0x49A0091000A7040A Ffma
    temp_69 = fma(temp_29, vp_c4.data[2].z, temp_60);
    // 0x0001F8: 0x49A0099000670413 Ffma
    temp_70 = fma(temp_29, vp_c4.data[1].z, temp_61);
    // 0x000208: 0x4C58101000771010 Fadd
    temp_71 = temp_62 + vp_c4.data[1].w;
    // 0x000210: 0x49A006100027050C Ffma
    temp_72 = fma(temp_31, vp_c4.data[0].z, temp_63);
    // 0x000218: 0x59A0040000971604 Ffma
    temp_73 = fma(temp_64, temp_21, temp_16);
    // 0x000228: 0x49A0071000A7050E Ffma
    temp_74 = fma(temp_31, vp_c4.data[2].z, temp_65);
    // 0x000230: 0x49A005900067050B Ffma
    temp_75 = fma(temp_31, vp_c4.data[1].z, temp_66);
    // 0x000238: 0x4C58101000370F0F Fadd
    temp_76 = temp_67 + vp_c4.data[0].w;
    // 0x000248: 0x59A0008000371001 Ffma
    temp_77 = fma(temp_71, temp_49, temp_40);
    // 0x000250: 0x5C68100000D70D05 Fmul
    temp_78 = temp_68 * temp_68;
    // 0x000258: 0x5C68100000C70C08 Fmul
    temp_79 = temp_72 * temp_72;
    // 0x000268: 0x4C5810180BA70410 Fadd
    temp_80 = temp_73 + vp_c6.data[46].z;
    // 0x000270: 0x59A0000000270F02 Ffma
    temp_81 = fma(temp_76, temp_45, temp_36);
    // 0x000278: 0xEFD87F800AC7FF00 Ald
    temp_82 = in_attr2.w;
    // 0x000288: 0x4C5810180B97010F Fadd
    temp_83 = temp_77 + vp_c6.data[46].y;
    // 0x000290: 0xEFF07F800E07FF06 Ast
    out_attr6.x = temp_56;
    // 0x000298: 0x59A0028001371305 Ffma
    temp_84 = fma(temp_70, temp_70, temp_78);
    // 0x0002A8: 0xEFF07F800E47FF07 Ast
    out_attr6.y = temp_58;
    // 0x0002B0: 0x59A0040000B70B03 Ffma
    temp_85 = fma(temp_75, temp_75, temp_79);
    // 0x0002B8: 0xEFF07F800D07FF02 Ast
    out_attr5.x = temp_81;
    // 0x0002C8: 0x4C6810180C671008 Fmul
    temp_86 = temp_80 * vp_c6.data[49].z;
    // 0x0002D0: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_77;
    // 0x0002D8: 0x4C6810180C271011 Fmul
    temp_87 = temp_80 * vp_c6.data[48].z;
    // 0x0002E8: 0xEFF07F800D87FF04 Ast
    out_attr5.z = temp_73;
    // 0x0002F0: 0x4C6810180CA71010 Fmul
    temp_88 = temp_80 * vp_c6.data[50].z;
    // 0x0002F8: 0x59A0028000A70A05 Ffma
    temp_89 = fma(temp_69, temp_69, temp_84);
    // 0x000308: 0x49A004180C570F14 Ffma
    temp_90 = fma(temp_83, vp_c6.data[49].y, temp_86);
    // 0x000310: 0x5080000000570508 Mufu
    temp_91 = inversesqrt(temp_89);
    // 0x000318: 0x4C5810180B870209 Fadd
    temp_92 = temp_81 + vp_c6.data[46].x;
    // 0x000328: 0x49A008980C170F12 Ffma
    temp_93 = fma(temp_83, vp_c6.data[48].y, temp_87);
    // 0x000330: 0x49A008180C970F10 Ffma
    temp_94 = fma(temp_83, vp_c6.data[50].y, temp_88);
    // 0x000338: 0x59A0018000E70E06 Ffma
    temp_95 = fma(temp_74, temp_74, temp_85);
    // 0x000348: 0x4C5830180B070203 Fadd
    temp_96 = 0.0 - vp_c6.data[44].x;
    temp_97 = temp_81 + temp_96;
    // 0x000350: 0x5080000000570605 Mufu
    temp_98 = inversesqrt(temp_95);
    // 0x000358: 0x49A00A180C470914 Ffma
    temp_99 = fma(temp_92, vp_c6.data[49].x, temp_90);
    // 0x000368: 0x49A009180C070912 Ffma
    temp_100 = fma(temp_92, vp_c6.data[48].x, temp_93);
    // 0x000370: 0x49A008180C870910 Ffma
    temp_101 = fma(temp_92, vp_c6.data[50].x, temp_94);
    // 0x000378: 0x4C5830180B170107 Fadd
    temp_102 = 0.0 - vp_c6.data[44].y;
    temp_103 = temp_77 + temp_102;
    // 0x000388: 0x4C58300C03370111 Fadd
    temp_104 = 0.0 - vp_c3.data[12].w;
    temp_105 = temp_77 + temp_104;
    // 0x000390: 0x4C68101803870309 Fmul
    temp_106 = temp_97 * vp_c6.data[14].x;
    // 0x000398: 0xEFF07F800B47FF11 Ast
    out_attr3.y = temp_105;
    // 0x0003A8: 0x5C68100000871303 Fmul
    temp_107 = temp_70 * temp_91;
    // 0x0003B0: 0x4C58300C0377040F Fadd
    temp_108 = 0.0 - vp_c3.data[13].w;
    temp_109 = temp_73 + temp_108;
    // 0x0003B8: 0xEFF07F800947FF03 Ast
    out_attr1.y = temp_107;
    // 0x0003C8: 0x49A0049803970713 Ffma
    temp_110 = fma(temp_103, vp_c6.data[14].y, temp_106);
    // 0x0003D0: 0xEFF07F800B87FF0F Ast
    out_attr3.z = temp_109;
    // 0x0003D8: 0x4C68100C00070207 Fmul
    temp_111 = temp_81 * vp_c3.data[0].x;
    // 0x0003E8: 0x4C68100C00870206 Fmul
    temp_112 = temp_81 * vp_c3.data[2].x;
    // 0x0003F0: 0x4C5830180B270411 Fadd
    temp_113 = 0.0 - vp_c6.data[44].z;
    temp_114 = temp_73 + temp_113;
    // 0x0003F8: 0x5C68100000570C0C Fmul
    temp_115 = temp_72 * temp_98;
    // 0x000408: 0x5C68100000570B0B Fmul
    temp_116 = temp_75 * temp_98;
    // 0x000410: 0xEFF07F800807FF0C Ast
    out_attr0.x = temp_115;
    // 0x000418: 0x4C68100C0047020F Fmul
    temp_117 = temp_81 * vp_c3.data[1].x;
    // 0x000428: 0xEFF07F800847FF0B Ast
    out_attr0.y = temp_116;
    // 0x000430: 0x49A0038C00170109 Ffma
    temp_118 = fma(temp_77, vp_c3.data[0].y, temp_111);
    // 0x000438: 0x5C68100000570E0E Fmul
    temp_119 = temp_74 * temp_98;
    // 0x000448: 0x5C68100000870D0D Fmul
    temp_120 = temp_68 * temp_91;
    // 0x000450: 0xEFF07F800887FF0E Ast
    out_attr0.z = temp_119;
    // 0x000458: 0x5C68100000870A0A Fmul
    temp_121 = temp_69 * temp_91;
    // 0x000468: 0xEFF07F800907FF0D Ast
    out_attr1.x = temp_120;
    // 0x000470: 0x49A0030C00970105 Ffma
    temp_122 = fma(temp_77, vp_c3.data[2].y, temp_112);
    // 0x000478: 0xEFF07F800987FF0A Ast
    out_attr1.z = temp_121;
    // 0x000488: 0x4C58101002070408 Fadd
    temp_123 = temp_73 + vp_c4.data[8].x;
    // 0x000490: 0x49A0099803A71106 Ffma
    temp_124 = fma(temp_114, vp_c6.data[14].z, temp_110);
    // 0x000498: 0x4C6810180BB71010 Fmul
    temp_125 = temp_101 * vp_c6.data[46].w;
    // 0x0004A8: 0x49A0078C00570111 Ffma
    temp_126 = fma(temp_77, vp_c3.data[1].y, temp_117);
    // 0x0004B0: 0xEFF07F801287FF10 Ast
    out_attr10.z = temp_125;
    // 0x0004B8: 0x49A0048C00270413 Ffma
    temp_127 = fma(temp_73, vp_c3.data[0].z, temp_118);
    // 0x0004C8: 0x4C58300C02F70215 Fadd
    temp_128 = 0.0 - vp_c3.data[11].w;
    temp_129 = temp_81 + temp_128;
    // 0x0004D0: 0x4C6810180BB71212 Fmul
    temp_130 = temp_100 * vp_c6.data[46].w;
    // 0x0004D8: 0xEFF07F800B07FF15 Ast
    out_attr3.x = temp_129;
    // 0x0004E8: 0x4C6810180BB71414 Fmul
    temp_131 = temp_99 * vp_c6.data[46].w;
    // 0x0004F0: 0xEFF07F801207FF12 Ast
    out_attr10.x = temp_130;
    // 0x0004F8: 0x49A0028C00A7040F Ffma
    temp_132 = fma(temp_73, vp_c3.data[2].z, temp_122);
    // 0x000508: 0xEFF07F801247FF14 Ast
    out_attr10.y = temp_131;
    // 0x000510: 0x49A0028C00A70805 Ffma
    temp_133 = fma(temp_123, vp_c3.data[2].z, temp_122);
    // 0x000518: 0x49A0048C00270810 Ffma
    temp_134 = fma(temp_123, vp_c3.data[0].z, temp_118);
    // 0x000528: 0x49A0088C00670808 Ffma
    temp_135 = fma(temp_123, vp_c3.data[1].z, temp_126);
    // 0x000530: 0x49A0088C00670412 Ffma
    temp_136 = fma(temp_73, vp_c3.data[1].z, temp_126);
    // 0x000538: 0x4C58100C00371315 Fadd
    temp_137 = temp_127 + vp_c3.data[0].w;
    // 0x000548: 0x5C68100000C70A13 Fmul
    temp_138 = temp_121 * temp_115;
    // 0x000550: 0x5C68100000B70D11 Fmul
    temp_139 = temp_120 * temp_116;
    // 0x000558: 0x5C68100000E70314 Fmul
    temp_140 = temp_107 * temp_119;
    // 0x000568: 0x4C98079803C70007 Mov
    // 0x000570: 0x4C58100C00371010 Fadd
    temp_141 = temp_134 + vp_c3.data[0].w;
    // 0x000578: 0x49A0010400070C02 Ffma
    temp_142 = fma(temp_115, vp_c1.data[0].x, temp_81);
    // 0x000588: 0x59A2098000E70D13 Ffma
    temp_143 = 0.0 - temp_138;
    temp_144 = fma(temp_120, temp_119, temp_143);
    // 0x000590: 0x59A2088000C70311 Ffma
    temp_145 = 0.0 - temp_139;
    temp_146 = fma(temp_107, temp_115, temp_145);
    // 0x000598: 0x59A20A0000B70A09 Ffma
    temp_147 = 0.0 - temp_140;
    temp_148 = fma(temp_121, temp_116, temp_147);
    // 0x0005A8: 0x49A0008400070B01 Ffma
    temp_149 = fma(temp_116, vp_c1.data[0].x, temp_77);
    // 0x0005B0: 0x51A0039803B7060B Ffma
    temp_150 = fma(temp_124, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0005B8: 0x4C58100C00770808 Fadd
    temp_151 = temp_135 + vp_c3.data[1].w;
    // 0x0005C8: 0xEFF07F801047FF0B Ast
    out_attr8.y = temp_150;
    // 0x0005D0: 0x4C68100C02071006 Fmul
    temp_152 = temp_141 * vp_c3.data[8].x;
    // 0x0005D8: 0x5C6810000007090A Fmul
    temp_153 = temp_148 * temp_82;
    // 0x0005E8: 0x4C68100C02871003 Fmul
    temp_154 = temp_141 * vp_c3.data[10].x;
    // 0x0005F0: 0xEFF07F800A07FF0A Ast
    out_attr2.x = temp_153;
    // 0x0005F8: 0x4C68100C02471007 Fmul
    temp_155 = temp_141 * vp_c3.data[9].x;
    // 0x000608: 0x5C68100000071313 Fmul
    temp_156 = temp_144 * temp_82;
    // 0x000610: 0x5C68100000071111 Fmul
    temp_157 = temp_146 * temp_82;
    // 0x000618: 0xEFF07F800A47FF13 Ast
    out_attr2.y = temp_156;
    // 0x000628: 0x4C68100C01C71009 Fmul
    temp_158 = temp_141 * vp_c3.data[7].x;
    // 0x000630: 0xEFF07F800A87FF11 Ast
    out_attr2.z = temp_157;
    // 0x000638: 0x4C68100C0AC70200 Fmul
    temp_159 = temp_142 * vp_c3.data[43].x;
    // 0x000648: 0x49A0030C02170806 Ffma
    temp_160 = fma(temp_151, vp_c3.data[8].y, temp_152);
    // 0x000650: 0x49A0018C02970803 Ffma
    temp_161 = fma(temp_151, vp_c3.data[10].y, temp_154);
    // 0x000658: 0x49A0038C02570807 Ffma
    temp_162 = fma(temp_151, vp_c3.data[9].y, temp_155);
    // 0x000668: 0x4C58100C00771212 Fadd
    temp_163 = temp_136 + vp_c3.data[1].w;
    // 0x000670: 0x49A0048C01D70808 Ffma
    temp_164 = fma(temp_151, vp_c3.data[7].y, temp_158);
    // 0x000678: 0x49A0000C0AD70109 Ffma
    temp_165 = fma(temp_149, vp_c3.data[43].y, temp_159);
    // 0x000688: 0x4C68101802C71515 Fmul
    temp_166 = temp_137 * vp_c6.data[11].x;
    // 0x000690: 0x4C68100C0B47020A Fmul
    temp_167 = temp_142 * vp_c3.data[45].x;
    // 0x000698: 0x4C68100C0B070200 Fmul
    temp_168 = temp_142 * vp_c3.data[44].x;
    // 0x0006A8: 0x4C68100C0A87020B Fmul
    temp_169 = temp_142 * vp_c3.data[42].x;
    // 0x0006B0: 0x49A0020400070E04 Ffma
    temp_170 = fma(temp_119, vp_c1.data[0].x, temp_73);
    // 0x0006B8: 0x4C58100C00B70F0F Fadd
    temp_171 = temp_132 + vp_c3.data[2].w;
    // 0x0006C8: 0x49A00A9802D71212 Ffma
    temp_172 = fma(temp_163, vp_c6.data[11].y, temp_166);
    // 0x0006D0: 0xEFF07F800C87FF0F Ast
    out_attr4.z = temp_171;
    // 0x0006D8: 0x4C58100C00B70505 Fadd
    temp_173 = temp_133 + vp_c3.data[2].w;
    // 0x0006E8: 0x49A0050C0B57010A Ffma
    temp_174 = fma(temp_149, vp_c3.data[45].y, temp_167);
    // 0x0006F0: 0x49A0000C0B170102 Ffma
    temp_175 = fma(temp_149, vp_c3.data[44].y, temp_168);
    // 0x0006F8: 0x49A0058C0A97010B Ffma
    temp_176 = fma(temp_149, vp_c3.data[42].y, temp_169);
    // 0x000708: 0x4C9807980307000C Mov
    // 0x000710: 0x49A0091802E70F12 Ffma
    temp_177 = fma(temp_171, vp_c6.data[11].z, temp_172);
    // 0x000718: 0x49A0030C02270506 Ffma
    temp_178 = fma(temp_173, vp_c3.data[8].z, temp_160);
    // 0x000728: 0x49A0018C02A70503 Ffma
    temp_179 = fma(temp_173, vp_c3.data[10].z, temp_161);
    // 0x000730: 0x49A0038C02670507 Ffma
    temp_180 = fma(temp_173, vp_c3.data[9].z, temp_162);
    // 0x000738: 0x49A0040C01E70508 Ffma
    temp_181 = fma(temp_173, vp_c3.data[7].z, temp_164);
    // 0x000748: 0x49A0048C0AE70409 Ffma
    temp_182 = fma(temp_170, vp_c3.data[43].z, temp_165);
    // 0x000750: 0x49A0050C0B67040A Ffma
    temp_183 = fma(temp_170, vp_c3.data[45].z, temp_174);
    // 0x000758: 0x49A0010C0B270402 Ffma
    temp_184 = fma(temp_170, vp_c3.data[44].z, temp_175);
    // 0x000768: 0x49A0058C0AA7040B Ffma
    temp_185 = fma(temp_170, vp_c3.data[42].z, temp_176);
    // 0x000770: 0x51A0061802F71212 Ffma
    temp_186 = fma(temp_177, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000778: 0x4C58100C02370606 Fadd
    temp_187 = temp_178 + vp_c3.data[8].w;
    // 0x000788: 0xEFF07F801007FF12 Ast
    out_attr8.x = temp_186;
    // 0x000790: 0x4C58100C02B70303 Fadd
    temp_188 = temp_179 + vp_c3.data[10].w;
    // 0x000798: 0xEFF07F800747FF06 Ast
    gl_Position.y = temp_187;
    // 0x0007A8: 0x4C58100C02770707 Fadd
    temp_189 = temp_180 + vp_c3.data[9].w;
    // 0x0007B0: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_188;
    // 0x0007B8: 0x4C58100C01F70808 Fadd
    temp_190 = temp_181 + vp_c3.data[7].w;
    // 0x0007C8: 0xEFF07F800787FF07 Ast
    gl_Position.z = temp_189;
    // 0x0007D0: 0x4C58100C0AF70909 Fadd
    temp_191 = temp_182 + vp_c3.data[43].w;
    // 0x0007D8: 0xEFF07F800707FF08 Ast
    gl_Position.x = temp_190;
    // 0x0007E8: 0x4C58100C0B770A0A Fadd
    temp_192 = temp_183 + vp_c3.data[45].w;
    // 0x0007F0: 0xEFF07F801147FF09 Ast
    out_attr9.y = temp_191;
    // 0x0007F8: 0x4C58100C0B370202 Fadd
    temp_193 = temp_184 + vp_c3.data[44].w;
    // 0x000808: 0xEFF07F8011C7FF0A Ast
    out_attr9.w = temp_192;
    // 0x000810: 0x4C58100C0AB70B0B Fadd
    temp_194 = temp_185 + vp_c3.data[42].w;
    // 0x000818: 0xEFF07F801187FF02 Ast
    out_attr9.z = temp_193;
    // 0x000828: 0xEFF07F801107FF0B Ast
    out_attr9.x = temp_194;
    // 0x000830: 0xE30000000007000F Exit
    return;
}
