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
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


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
    int temp_8;
    uint temp_9;
    uint temp_10;
    int temp_11;
    precise float temp_12;
    int temp_13;
    uint temp_14;
    uint temp_15;
    int temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    int temp_28;
    uint temp_29;
    uint temp_30;
    int temp_31;
    precise float temp_32;
    int temp_33;
    uint temp_34;
    int temp_35;
    precise float temp_36;
    int temp_37;
    uint temp_38;
    uint temp_39;
    int temp_40;
    precise float temp_41;
    int temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270002 Mov
    // 0x000010: 0xEFD87F800807FF01 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400370003 Mov
    // 0x000030: 0xEFD87F801047FF09 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x3848000000470013 Shl
    temp_4 = temp_2 << 4;
    // 0x000048: 0xEFD87F800847FF11 Ald
    temp_5 = in_attr0.y;
    // 0x000050: 0x4C68101000870100 Fmul
    temp_6 = temp_0 * vp_c4.data[2].x;
    // 0x000058: 0xEFD87F800A07FF17 Ald
    temp_7 = in_attr2.x;
    // 0x000068: 0xEF94007068871304 Ldc
    temp_8 = temp_4 + 0x688;
    temp_9 = uint(temp_8) >> 2;
    temp_10 = temp_9 >> 2;
    temp_11 = int(temp_9) & 3;
    temp_12 = vp_c7.data[int(temp_10)][temp_11];
    // 0x000070: 0xEF9400704887130B Ldc
    temp_13 = temp_4 + 0x488;
    temp_14 = uint(temp_13) >> 2;
    temp_15 = temp_14 >> 2;
    temp_16 = int(temp_14) & 3;
    temp_17 = vp_c7.data[int(temp_15)][temp_16];
    // 0x000078: 0x4C68101000070106 Fmul
    temp_18 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800887FF05 Ald
    temp_19 = in_attr0.z;
    // 0x000090: 0x4C6810100047010F Fmul
    temp_20 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F800A47FF12 Ald
    temp_21 = in_attr2.y;
    // 0x0000A8: 0x51A001140047090D Ffma
    temp_22 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0000B0: 0xEFD87F800907FF0C Ald
    temp_23 = in_attr1.x;
    // 0x0000B8: 0x51A0019400570909 Ffma
    temp_24 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0000C8: 0xEFD87F800947FF08 Ald
    temp_25 = in_attr1.y;
    // 0x0000D0: 0x49A0001000971110 Ffma
    temp_26 = fma(temp_5, vp_c4.data[2].y, temp_6);
    // 0x0000D8: 0xEFD87F801007FF0E Ald
    temp_27 = in_attr8.x;
    // 0x0000E8: 0xEF95007068071300 Ldc
    temp_28 = temp_4 + 0x680;
    temp_29 = uint(temp_28) >> 2;
    temp_30 = temp_29 >> 2;
    temp_31 = int(temp_29) & 3;
    temp_32 = vp_c7.data[int(temp_30)][temp_31];
    temp_33 = int(temp_29) + 1;
    temp_34 = uint(temp_33) >> 2;
    temp_35 = temp_33 & 3;
    temp_36 = vp_c7.data[int(temp_34)][temp_35];
    // 0x0000F0: 0xEF95007048071302 Ldc
    temp_37 = temp_4 + 0x480;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_38 >> 2;
    temp_40 = int(temp_38) & 3;
    temp_41 = vp_c7.data[int(temp_39)][temp_40];
    temp_42 = int(temp_38) + 1;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_42 & 3;
    temp_45 = vp_c7.data[int(temp_43)][temp_44];
    // 0x0000F8: 0x49A0031000171106 Ffma
    temp_46 = fma(temp_5, vp_c4.data[0].y, temp_18);
    // 0x000108: 0xEFD87F800987FF0A Ald
    temp_47 = in_attr1.z;
    // 0x000110: 0x49A007900057110F Ffma
    temp_48 = fma(temp_5, vp_c4.data[1].y, temp_20);
    // 0x000118: 0xEFD87F800A87FF07 Ald
    temp_49 = in_attr2.z;
    // 0x000128: 0x4C68101000071711 Fmul
    temp_50 = temp_7 * vp_c4.data[0].x;
    // 0x000130: 0x4C68101000871714 Fmul
    temp_51 = temp_7 * vp_c4.data[2].x;
    // 0x000138: 0x49A0081000A70515 Ffma
    temp_52 = fma(temp_19, vp_c4.data[2].z, temp_26);
    // 0x000148: 0x4C68101000471717 Fmul
    temp_53 = temp_7 * vp_c4.data[1].x;
    // 0x000150: 0x49A0089000171210 Ffma
    temp_54 = fma(temp_21, vp_c4.data[0].y, temp_50);
    // 0x000158: 0x49A00A1000971211 Ffma
    temp_55 = fma(temp_21, vp_c4.data[2].y, temp_51);
    // 0x000168: 0x49A0079000670514 Ffma
    temp_56 = fma(temp_19, vp_c4.data[1].z, temp_48);
    // 0x000170: 0x4C68101000070C19 Fmul
    temp_57 = temp_23 * vp_c4.data[0].x;
    // 0x000178: 0x4C58101000B71515 Fadd
    temp_58 = temp_52 + vp_c4.data[2].w;
    // 0x000188: 0x4C68101000870C16 Fmul
    temp_59 = temp_23 * vp_c4.data[2].x;
    // 0x000190: 0x4C68101000470C1A Fmul
    temp_60 = temp_23 * vp_c4.data[1].x;
    // 0x000198: 0x49A00B9000571212 Ffma
    temp_61 = fma(temp_21, vp_c4.data[1].y, temp_53);
    // 0x0001A8: 0x4C58101000771414 Fadd
    temp_62 = temp_56 + vp_c4.data[1].w;
    // 0x0001B0: 0x49A00C900017080F Ffma
    temp_63 = fma(temp_25, vp_c4.data[0].y, temp_57);
    // 0x0001B8: 0x59A0020000B71504 Ffma
    temp_64 = fma(temp_58, temp_17, temp_12);
    // 0x0001C8: 0x49A00B100097080C Ffma
    temp_65 = fma(temp_25, vp_c4.data[2].y, temp_59);
    // 0x0001D0: 0x49A00D1000570813 Ffma
    temp_66 = fma(temp_25, vp_c4.data[1].y, temp_60);
    // 0x0001D8: 0x49A0069400070E08 Ffma
    temp_67 = fma(temp_27, vp_c5.data[0].x, temp_22);
    // 0x0001E8: 0x49A003100027050B Ffma
    temp_68 = fma(temp_19, vp_c4.data[0].z, temp_46);
    // 0x0001F0: 0x59A0008000371403 Ffma
    temp_69 = fma(temp_62, temp_45, temp_36);
    // 0x0001F8: 0x4C5810180BA7040D Fadd
    temp_70 = temp_64 + vp_c6.data[46].z;
    // 0x000208: 0x49A0079000270A01 Ffma
    temp_71 = fma(temp_47, vp_c4.data[0].z, temp_63);
    // 0x000210: 0x49A0081000270705 Ffma
    temp_72 = fma(temp_49, vp_c4.data[0].z, temp_54);
    // 0x000218: 0x49A0089000A70706 Ffma
    temp_73 = fma(temp_49, vp_c4.data[2].z, temp_55);
    // 0x000228: 0x49A0061000A70A0C Ffma
    temp_74 = fma(temp_47, vp_c4.data[2].z, temp_65);
    // 0x000230: 0x49A0049400170E09 Ffma
    temp_75 = fma(temp_27, vp_c5.data[0].y, temp_24);
    // 0x000238: 0x49A0091000670707 Ffma
    temp_76 = fma(temp_49, vp_c4.data[1].z, temp_61);
    // 0x000248: 0x49A0099000670A0A Ffma
    temp_77 = fma(temp_47, vp_c4.data[1].z, temp_66);
    // 0x000250: 0x4C58101000370B0B Fadd
    temp_78 = temp_68 + vp_c4.data[0].w;
    // 0x000258: 0x4C5810180B970311 Fadd
    temp_79 = temp_69 + vp_c6.data[46].y;
    // 0x000268: 0x4C6810180C670D0E Fmul
    temp_80 = temp_70 * vp_c6.data[49].z;
    // 0x000270: 0x4C6810180C270D12 Fmul
    temp_81 = temp_70 * vp_c6.data[48].z;
    // 0x000278: 0x4C6810180CA70D13 Fmul
    temp_82 = temp_70 * vp_c6.data[50].z;
    // 0x000288: 0x5C68100000170110 Fmul
    temp_83 = temp_71 * temp_71;
    // 0x000290: 0x5C6810000057050D Fmul
    temp_84 = temp_72 * temp_72;
    // 0x000298: 0x59A0000000270B0F Ffma
    temp_85 = fma(temp_78, temp_41, temp_32);
    // 0x0002A8: 0xEFD87F800AC7FF00 Ald
    temp_86 = in_attr2.w;
    // 0x0002B0: 0x49A007180C57110E Ffma
    temp_87 = fma(temp_79, vp_c6.data[49].y, temp_80);
    // 0x0002B8: 0xEFF07F800D07FF08 Ast
    out_attr5.x = temp_67;
    // 0x0002C8: 0x49A009980C971102 Ffma
    temp_88 = fma(temp_79, vp_c6.data[50].y, temp_82);
    // 0x0002D0: 0xEFF07F800D47FF09 Ast
    out_attr5.y = temp_75;
    // 0x0002D8: 0x59A0080000A70A15 Ffma
    temp_89 = fma(temp_77, temp_77, temp_83);
    // 0x0002E8: 0x59A0068000770713 Ffma
    temp_90 = fma(temp_76, temp_76, temp_84);
    // 0x0002F0: 0x49A009180C17110B Ffma
    temp_91 = fma(temp_79, vp_c6.data[48].y, temp_81);
    // 0x0002F8: 0x4C68100C00470F11 Fmul
    temp_92 = temp_85 * vp_c3.data[1].x;
    // 0x000308: 0x4C68100C00870F12 Fmul
    temp_93 = temp_85 * vp_c3.data[2].x;
    // 0x000310: 0x4C68100C00070F0D Fmul
    temp_94 = temp_85 * vp_c3.data[0].x;
    // 0x000318: 0x4C5810180B870F10 Fadd
    temp_95 = temp_85 + vp_c6.data[46].x;
    // 0x000328: 0x4C58300C02F70F17 Fadd
    temp_96 = 0.0 - vp_c3.data[11].w;
    temp_97 = temp_85 + temp_96;
    // 0x000330: 0x4C5830180B070F14 Fadd
    temp_98 = 0.0 - vp_c6.data[44].x;
    temp_99 = temp_85 + temp_98;
    // 0x000338: 0xEFF07F800B07FF17 Ast
    out_attr3.x = temp_97;
    // 0x000348: 0x59A00A8000C70C0F Ffma
    temp_100 = fma(temp_74, temp_74, temp_89);
    // 0x000350: 0x59A0098000670613 Ffma
    temp_101 = fma(temp_73, temp_73, temp_90);
    // 0x000358: 0x5080000000570F0F Mufu
    temp_102 = inversesqrt(temp_100);
    // 0x000368: 0x49A0088C00570309 Ffma
    temp_103 = fma(temp_69, vp_c3.data[1].y, temp_92);
    // 0x000370: 0x5080000000571308 Mufu
    temp_104 = inversesqrt(temp_101);
    // 0x000378: 0x49A007180C471016 Ffma
    temp_105 = fma(temp_95, vp_c6.data[49].x, temp_87);
    // 0x000388: 0x49A005980C071011 Ffma
    temp_106 = fma(temp_95, vp_c6.data[48].x, temp_91);
    // 0x000390: 0x49A001180C871002 Ffma
    temp_107 = fma(temp_95, vp_c6.data[50].x, temp_88);
    // 0x000398: 0x49A0090C0097030B Ffma
    temp_108 = fma(temp_69, vp_c3.data[2].y, temp_93);
    // 0x0003A8: 0x4C58101002070410 Fadd
    temp_109 = temp_64 + vp_c4.data[8].x;
    // 0x0003B0: 0x49A0068C0017030D Ffma
    temp_110 = fma(temp_69, vp_c3.data[0].y, temp_94);
    // 0x0003B8: 0x4C58300C03370318 Fadd
    temp_111 = 0.0 - vp_c3.data[12].w;
    temp_112 = temp_69 + temp_111;
    // 0x0003C8: 0x4C5830180B170315 Fadd
    temp_113 = 0.0 - vp_c6.data[44].y;
    temp_114 = temp_69 + temp_113;
    // 0x0003D0: 0xEFF07F800B47FF18 Ast
    out_attr3.y = temp_112;
    // 0x0003D8: 0x4C6810180BB70213 Fmul
    temp_115 = temp_107 * vp_c6.data[46].w;
    // 0x0003E8: 0x5C68100000F70101 Fmul
    temp_116 = temp_71 * temp_102;
    // 0x0003F0: 0xEFF07F801087FF13 Ast
    out_attr8.z = temp_115;
    // 0x0003F8: 0x5C68100000F70A0A Fmul
    temp_117 = temp_77 * temp_102;
    // 0x000408: 0xEFF07F800807FF01 Ast
    out_attr0.x = temp_116;
    // 0x000410: 0x5C68100000F70C12 Fmul
    temp_118 = temp_74 * temp_102;
    // 0x000418: 0xEFF07F800847FF0A Ast
    out_attr0.y = temp_117;
    // 0x000428: 0x49A0048C00671003 Ffma
    temp_119 = fma(temp_109, vp_c3.data[1].z, temp_103);
    // 0x000430: 0xEFF07F800887FF12 Ast
    out_attr0.z = temp_118;
    // 0x000438: 0x49A0058C00A71002 Ffma
    temp_120 = fma(temp_109, vp_c3.data[2].z, temp_108);
    // 0x000448: 0x4C58300C03770419 Fadd
    temp_121 = 0.0 - vp_c3.data[13].w;
    temp_122 = temp_64 + temp_121;
    // 0x000450: 0x4C5830180B27040F Fadd
    temp_123 = 0.0 - vp_c6.data[44].z;
    temp_124 = temp_64 + temp_123;
    // 0x000458: 0xEFF07F800B87FF19 Ast
    out_attr3.z = temp_122;
    // 0x000468: 0x49A0048C00670409 Ffma
    temp_125 = fma(temp_64, vp_c3.data[1].z, temp_103);
    // 0x000470: 0x5C68100000870707 Fmul
    temp_126 = temp_76 * temp_104;
    // 0x000478: 0x49A0058C00A7040B Ffma
    temp_127 = fma(temp_64, vp_c3.data[2].z, temp_108);
    // 0x000488: 0xEFF07F800947FF07 Ast
    out_attr1.y = temp_126;
    // 0x000490: 0x49A0068C00270404 Ffma
    temp_128 = fma(temp_64, vp_c3.data[0].z, temp_110);
    // 0x000498: 0x49A0068C00271010 Ffma
    temp_129 = fma(temp_109, vp_c3.data[0].z, temp_110);
    // 0x0004A8: 0x5C6810000087060C Fmul
    temp_130 = temp_73 * temp_104;
    // 0x0004B0: 0x5C6810000127070D Fmul
    temp_131 = temp_126 * temp_118;
    // 0x0004B8: 0xEFF07F800987FF0C Ast
    out_attr1.z = temp_130;
    // 0x0004C8: 0x5C68100000870505 Fmul
    temp_132 = temp_72 * temp_104;
    // 0x0004D0: 0x4C58100C00370404 Fadd
    temp_133 = temp_128 + vp_c3.data[0].w;
    // 0x0004D8: 0xEFF07F800907FF05 Ast
    out_attr1.x = temp_132;
    // 0x0004E8: 0x59A2068000A70C0D Ffma
    temp_134 = 0.0 - temp_131;
    temp_135 = fma(temp_130, temp_117, temp_134);
    // 0x0004F0: 0x5C68100000170C08 Fmul
    temp_136 = temp_130 * temp_116;
    // 0x0004F8: 0x5C68100000A7050A Fmul
    temp_137 = temp_132 * temp_117;
    // 0x000508: 0x4C58100C00770909 Fadd
    temp_138 = temp_125 + vp_c3.data[1].w;
    // 0x000510: 0x4C58100C00371010 Fadd
    temp_139 = temp_129 + vp_c3.data[0].w;
    // 0x000518: 0x4C68101802C70404 Fmul
    temp_140 = temp_133 * vp_c6.data[11].x;
    // 0x000528: 0x4C6810180387140E Fmul
    temp_141 = temp_99 * vp_c6.data[14].x;
    // 0x000530: 0x59A2040001270506 Ffma
    temp_142 = 0.0 - temp_136;
    temp_143 = fma(temp_132, temp_118, temp_142);
    // 0x000538: 0x59A205000017070A Ffma
    temp_144 = 0.0 - temp_137;
    temp_145 = fma(temp_126, temp_116, temp_144);
    // 0x000548: 0x4C58100C00770303 Fadd
    temp_146 = temp_119 + vp_c3.data[1].w;
    // 0x000550: 0x4C68100C02871001 Fmul
    temp_147 = temp_139 * vp_c3.data[10].x;
    // 0x000558: 0x49A0021802D70909 Ffma
    temp_148 = fma(temp_138, vp_c6.data[11].y, temp_140);
    // 0x000568: 0x4C68100C02071004 Fmul
    temp_149 = temp_139 * vp_c3.data[8].x;
    // 0x000570: 0x4C68100C02471005 Fmul
    temp_150 = temp_139 * vp_c3.data[9].x;
    // 0x000578: 0x4C68100C01C71010 Fmul
    temp_151 = temp_139 * vp_c3.data[7].x;
    // 0x000588: 0x49A007180397150E Ffma
    temp_152 = fma(temp_114, vp_c6.data[14].y, temp_141);
    // 0x000590: 0x4C58100C00B70B0B Fadd
    temp_153 = temp_127 + vp_c3.data[2].w;
    // 0x000598: 0x4C58100C00B70202 Fadd
    temp_154 = temp_120 + vp_c3.data[2].w;
    // 0x0005A8: 0xEFF07F800C87FF0B Ast
    out_attr4.z = temp_153;
    // 0x0005B0: 0x49A0020C02170304 Ffma
    temp_155 = fma(temp_146, vp_c3.data[8].y, temp_149);
    // 0x0005B8: 0x49A0008C02970301 Ffma
    temp_156 = fma(temp_146, vp_c3.data[10].y, temp_147);
    // 0x0005C8: 0x49A0028C02570305 Ffma
    temp_157 = fma(temp_146, vp_c3.data[9].y, temp_150);
    // 0x0005D0: 0x49A0080C01D70310 Ffma
    temp_158 = fma(temp_146, vp_c3.data[7].y, temp_151);
    // 0x0005D8: 0x49A0071803A70F0E Ffma
    temp_159 = fma(temp_124, vp_c6.data[14].z, temp_152);
    // 0x0005E8: 0x4C98079803C70008 Mov
    // 0x0005F0: 0x49A0049802E70B09 Ffma
    temp_160 = fma(temp_153, vp_c6.data[11].z, temp_148);
    // 0x0005F8: 0x4C98079803070007 Mov
    // 0x000608: 0x49A0020C02270204 Ffma
    temp_161 = fma(temp_154, vp_c3.data[8].z, temp_155);
    // 0x000610: 0x49A0008C02A70201 Ffma
    temp_162 = fma(temp_154, vp_c3.data[10].z, temp_156);
    // 0x000618: 0x49A0028C02670205 Ffma
    temp_163 = fma(temp_154, vp_c3.data[9].z, temp_157);
    // 0x000628: 0x49A0080C01E70210 Ffma
    temp_164 = fma(temp_154, vp_c3.data[7].z, temp_158);
    // 0x000630: 0x4C6810180BB71616 Fmul
    temp_165 = temp_105 * vp_c6.data[46].w;
    // 0x000638: 0x4C6810180BB71111 Fmul
    temp_166 = temp_106 * vp_c6.data[46].w;
    // 0x000648: 0xEFF07F801047FF16 Ast
    out_attr8.y = temp_165;
    // 0x000650: 0x51A0041803B70E0E Ffma
    temp_167 = fma(temp_159, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000658: 0xEFF07F801007FF11 Ast
    out_attr8.x = temp_166;
    // 0x000668: 0x5C68100000070D0D Fmul
    temp_168 = temp_135 * temp_86;
    // 0x000670: 0xEFF07F800F47FF0E Ast
    out_attr7.y = temp_167;
    // 0x000678: 0x5C68100000070606 Fmul
    temp_169 = temp_143 * temp_86;
    // 0x000688: 0xEFF07F800A07FF0D Ast
    out_attr2.x = temp_168;
    // 0x000690: 0x5C68100000070A0A Fmul
    temp_170 = temp_145 * temp_86;
    // 0x000698: 0xEFF07F800A47FF06 Ast
    out_attr2.y = temp_169;
    // 0x0006A8: 0x51A0039802F70909 Ffma
    temp_171 = fma(temp_160, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0006B0: 0xEFF07F800A87FF0A Ast
    out_attr2.z = temp_170;
    // 0x0006B8: 0x4C58100C02370404 Fadd
    temp_172 = temp_161 + vp_c3.data[8].w;
    // 0x0006C8: 0xEFF07F800F07FF09 Ast
    out_attr7.x = temp_171;
    // 0x0006D0: 0x4C58100C02B70101 Fadd
    temp_173 = temp_162 + vp_c3.data[10].w;
    // 0x0006D8: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_172;
    // 0x0006E8: 0x4C58100C02770505 Fadd
    temp_174 = temp_163 + vp_c3.data[9].w;
    // 0x0006F0: 0xEFF07F8007C7FF01 Ast
    gl_Position.w = temp_173;
    // 0x0006F8: 0x4C58100C01F71010 Fadd
    temp_175 = temp_164 + vp_c3.data[7].w;
    // 0x000708: 0xEFF07F800787FF05 Ast
    gl_Position.z = temp_174;
    // 0x000710: 0xEFF07F800707FF10 Ast
    gl_Position.x = temp_175;
    // 0x000718: 0xE30000000007000F Exit
    return;
}
